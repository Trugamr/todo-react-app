export const snapShotToArray = (snapShot = null) => {
  if (!snapShot) return []

  return snapShot.docs
    .map(snapShot => ({
      id: snapShot.id,
      ...snapShot.data()
    }))
    .sort((prev, next) => prev.createdAt - next.createdAt)
}
