import {serve} from 'https://deno.land/std@0.164.0/http/server.ts';

const port = 8080;

const handler = async (request: Request): Promise<Reponse> => {
  const resp = await fetch('https://api.github.com/users/denoland', {
    headers: {
      accept: 'application/json',
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      'content-type': 'application/json',
    },
  });
};

console.log(`Listening on http://localhost:${port}`);
serve(handler);
