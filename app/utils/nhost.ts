import { NhostClient } from '@nhost/nhost-js';

const nhost = new NhostClient({
  backendUrl: 'https://xflagfcmiemryomkpfoy.nhost.run'
});

(async () => {
    // Sign in user
    // This should be a user signing in and the application 
    // checking if a valid session is there to retreive the data
    const signInResponse = await nhost.auth.signIn({
      email: 'hi+test@dannyarntz.nl',
      password: 'mc4gpPMPgi#Y9S$D'
    })
    
    // Handle sign-in error
    if (signInResponse.error) {
      throw signInResponse.error
    }

  // nhost.graphql.request returns a promise, so we use await here
  const todos = await nhost.graphql.request(`
    query {
      stream {
        id
        workout {
          id
          name
          notes
          reps
          time
          updated_at
          weight
          workout_type
          description
          created_at
        }
      }
    }
  `)

  // Print todos to console
  console.log(JSON.stringify(todos.data, null, 2))
})();

export { nhost }
