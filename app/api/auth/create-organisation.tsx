
import axios from 'axios';

export default async function handler(req: { method: string; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: any; }): void; new(): any; }; end: { (): void; new(): any; }; }; }) {
  if (req.method === 'POST') {
    // Replace these with your actual Auth0 domain and client credentials
    const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
    const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
    const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;

    try {
      // Obtain an access token from Auth0
      const tokenResponse = await axios.post(`https://${AUTH0_DOMAIN}/oauth/token`, {
        client_id: AUTH0_CLIENT_ID,
        client_secret: AUTH0_CLIENT_SECRET,
        audience: `https://${AUTH0_DOMAIN}/api/v2/`,
        grant_type: 'client_credentials',
      });

      const accessToken = tokenResponse.data.access_token;

      // Create an organization in Auth0
      const organizationResponse = await axios.post(
        `https://${AUTH0_DOMAIN}/api/v2/organizations`,
        req.body, // Contains the organization info collected in your form
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      res.status(200).json(organizationResponse.data);
    } catch (error) {
      // Handle errors
    res.status(500).json({ error: error as any });
    }
  } else {
    // Handle non-POST requests
    res.status(405).end();
  }
}
