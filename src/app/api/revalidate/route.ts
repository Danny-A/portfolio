import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

// Webhook verification (optional but recommended)
function verifyWebhook(request: NextRequest): boolean {
  const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET;
  if (!webhookSecret) {
    // If no secret is configured, allow all requests (development mode)
    return true;
  }

  const signature = request.headers.get('x-contentful-webhook-signature');
  // In production, you should verify the signature
  // This is a simplified version - implement proper HMAC verification for production
  return signature === webhookSecret;
}

export async function POST(request: NextRequest) {
  try {
    // Verify webhook authenticity
    if (!verifyWebhook(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

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
