export const success = (res, status) => entity => {
  if (entity) {
    // setTimeout(function () {
    res.status(status || 200).json(entity)
    // }, 3000)
  }
  return null
}

export const notFound = res => entity => {
  if (entity) {
    return entity
  }
  // setTimeout(function () {
  res.status(404).end()
  // }, 3000)
  return null
}

export const authorOrAdmin = (res, user, userField) => entity => {
  if (entity) {
    const isAdmin = user.role === 'admin'
    const isAuthor = entity[userField] && entity[userField].equals(user.id)
    if (isAuthor || isAdmin) {
      return entity
    }
    res.status(401).end()
  }
  return null
}

export const error = (res, errorCode) => entity =>
  entity
    ? entity.error
      ? (res.status(entity.errorCode || errorCode || 405).json(entity.err),
      null)
      : entity
    : null
