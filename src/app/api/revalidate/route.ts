import { timingSafeEqual } from 'node:crypto';

import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

function verifyWebhook(request: NextRequest): boolean {
  const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET;
  if (!webhookSecret) {
    // Fail closed in production; allow unauthenticated calls only in local development
    return process.env.NODE_ENV !== 'production';
  }

  const signature = request.headers.get('x-contentful-webhook-signature');
  if (!signature) return false;

  const a = Buffer.from(signature);
  const b = Buffer.from(webhookSecret);
  return a.length === b.length && timingSafeEqual(a, b);
}

// Stale-while-revalidate: serve cached content while it refreshes in the background
const revalidate = (...tags: string[]) => tags.forEach(tag => revalidateTag(tag, 'max'));

export async function POST(request: NextRequest) {
  try {
    // Read the raw body as text first (you can only read the request body once)
    const rawBody = await request.text();
    // Verify webhook authenticity
    if (!verifyWebhook(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse the raw body as JSON
    const body = JSON.parse(rawBody);

    // Get the webhook topic from headers to determine event type
    const topic = request.headers.get('x-contentful-topic') || '';

    // Extract content type from different webhook payload structures
    let contentType: string | undefined;

    if (topic.includes('ContentType')) {
      // ContentType events: body.sys.id contains the content type ID
      contentType = body?.sys?.id;
    } else {
      // Entry events: body.sys.contentType.sys.id contains the content type ID
      contentType = body?.sys?.contentType?.sys?.id;
    }

    if (!contentType) {
      console.log('No content type found in payload:', { topic, bodyKeys: Object.keys(body || {}) });
      return NextResponse.json({ error: 'Invalid payload - no content type found' }, { status: 400 });
    }

    console.log(`Processing webhook for content type: ${contentType}, topic: ${topic}`);

    // Revalidate based on content type
    switch (contentType) {
      case 'pageLanding':
        revalidate('homepage');
        break;
      case 'pageWorkOverview':
        revalidate('workpage');
        break;
      case 'pageWork':
        revalidate('workitems');
        break;
      case 'pageContact':
        revalidate('contactpage');
        break;
      case 'pageBlogOverview':
        revalidate('blogoverview');
        break;
      case 'pageBlogPost':
        // Post content, list, slugs and per-post tag (slug may differ per locale)
        revalidate('blogposts');
        break;
      case 'siteSettings':
        revalidate('sitesettings');
        break;
      case 'componentSeo':
        // SEO component changes might affect multiple pages
        revalidate('homepage', 'workpage', 'contactpage', 'blogoverview', 'blogposts');
        break;
      default:
        console.log(`Unknown content type: ${contentType}`);
        return NextResponse.json({ message: 'Ignored unknown content type', contentType }, { status: 202 });
    }

    return NextResponse.json({
      message: 'Revalidation triggered',
      contentType,
      topic,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
