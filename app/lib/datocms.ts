import { request as graphqlRequest, Variables } from 'graphql-request';
import { RequestDocument } from 'graphql-request/dist/types';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { getSession } from '~/utils/sessions';

export async function load<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
  preview?: boolean
) {
  let endpoint = 'https://graphql.datocms.com';

  if (process.env.DATOCMS_ENVIRONMENT) {
    endpoint += `/environments/${process.env.DATOCMS_ENVIRONMENT}`;
  }

  if (preview) {
    endpoint += `/preview`;
  }

  return graphqlRequest(endpoint, document, variables, {
    Authorization: `Bearer ${process.env.DATOCMS_READONLY_TOKEN}`,
  });
}

export async function performRequest<TDocument = any>({
  request,
  document,
  variables,
}: {
  request: Request;
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>;
  variables?: Variables;
}) {
  const session = await getSession(request.headers.get('Cookie'));
  const previewEnabled = session.get('preview');

  if (previewEnabled) {
    return {
      document,
      variables,
      preview: true,
      initialData: await load(document, variables, true),
      token: process.env.DATOCMS_READONLY_TOKEN,
      environment: process.env.DATOCMS_ENVIRONMENT,
    };
  }

  return await load(document, variables);
}
