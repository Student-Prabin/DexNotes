import ratelimit from "../config/upstash.js";

export const rateLimit = async (req, res, next) => {
  try {
    const identifier = req.ip || req.headers["x-forwarded-for"] || "127.0.0.1";
    const { success } = await ratelimit.limit(identifier);

    if (!success) {
      return res.status(429).json({ message: "Too many requests. Please try again later." });
    }

    return next();
  } catch (error) {
    console.error("Rate limit error:", error);
    return next(error);
  }
}