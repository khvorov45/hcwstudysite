import path from "path"
import { readFile } from "fs/promises"

export async function get(req: any, res: any, next: () => void) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  })
  const indexPath = path.resolve(`content/${req.params.slug}.md`)
  const content = await readFile(indexPath, { encoding: "utf-8" })
  res.end(JSON.stringify(content))
}
