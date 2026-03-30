/** GitHub Pages 등 서브경로 배포 시 `NEXT_PUBLIC_BASE_PATH=/저장소이름` 과 맞춥니다. */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  if (!path.startsWith("/")) {
    return base ? `${base}/${path}` : `/${path}`
  }
  return base ? `${base}${path}` : path
}
