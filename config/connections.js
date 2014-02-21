/**
 * Connections
 * 
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.) 
 * A `connection` is that additional information.
 * 
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys 
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://links.sailsjs.org/docs/config/connections
 */

module.exports.connections = {

  // Local disk storage for DEVELOPMENT ONLY
  //
  // Installed by default.
  //

   dataStore : {
    adapter : 'sails-postgresql',
    url : process.env.HEROKU_POSTGRESQL_NAVY_URL,
   // ssl : true


  },

   // username : 'rediscloud'
//db: 0,
   //password: process.env.REDIS_PASSWORD,

    


  // More adapters:
  // https://github.com/balderdashy/sails

};




// REDIS_PORT=16871
// REDIS_PASSWORD=GCSP9jTFreP9H8k3
// REDIS_DB=redis-app22351035
