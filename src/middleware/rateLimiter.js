// const rateLimit = require('express-rate-limit')

// const rateLimiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, 
// 	max: 10, 
// 	standardHeaders: true,
// })

// module.exports = rateLimiter

// Middleware to limit hit API endpoint
const {RateLimiterMemory} = require('rate-limiter-flexible')

const MAX_REQUEST = 5; // Maximum 5 request
const MAX_WINDOW = 5 * 60; // Per 15 minutes

const rateLimit = new RateLimiterMemory({
    duration: MAX_WINDOW,
    points: MAX_REQUEST
});

//ratelimiter based on ip address
const rateLimiter = async (req,res,next) => {
    rateLimit
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).json({ message: 'Too many request. Please try again later' });
    });
};

module.exports = rateLimiter