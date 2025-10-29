import crypto from 'crypto';

import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

function verifyWebhook(request: NextRequest, body: string): boolean {
  const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET;
  if (!webhookSecret) return true;

  const signature = request.headers.get('x-contentful-webhook-signature');
  if (!signature) return false;

  const expectedSignature = crypto.createHmac('sha256', webhookSecret).update(body).digest('hex');

  // Use timing-safe comparison to prevent timing attacks
  return crypto.timingSafeEqual(Buffer.from(signature, 'hex'), Buffer.from(expectedSignature, 'hex'));
}

export async function POST(request: NextRequest) {
  try {
    // Read the raw body as text first (you can only read the request body once)
    const rawBody = await request.text();
    // Verify webhook authenticity
    if (!verifyWebhook(request, rawBody)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse the raw body as JSON
    const body = JSON.parse(rawBody);

    // Extract content type from Contentful webhook payload
    const contentType = body?.sys?.contentType?.sys?.id;

    if (!contentType) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Revalidate based on content type
    switch (contentType) {
      case 'pageLanding':
        revalidateTag('homepage', 'page');
        console.log('Revalidated homepage');
        break;
      case 'pageWorkOverview':
        revalidateTag('workpage', 'page');
        console.log('Revalidated work page');
        break;
      case 'pageWork':
        revalidateTag('workitems', 'page');
        console.log('Revalidated work items');
        break;
      case 'pageContact':
        revalidateTag('contactpage', 'page');
        console.log('Revalidated contact page');
        break;
      case 'componentSeo':
        // SEO component changes might affect multiple pages
        revalidateTag('homepage', 'page');
        revalidateTag('workpage', 'page');
        revalidateTag('contactpage', 'page');
        console.log('Revalidated all pages due to SEO change');
        break;
      default:
        console.log(`Unknown content type: ${contentType}`);
    }

    return NextResponse.json({
      message: 'Revalidation triggered',
      contentType,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
