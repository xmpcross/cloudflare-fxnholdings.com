// Keep the existing API handlers; only /api/* invokes a Pages Function.
import worker from "../../worker/index.js";
export function onRequest({ request, env }) {
  return worker.fetch(request, env);
}
