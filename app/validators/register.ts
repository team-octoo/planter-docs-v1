import vine from '@vinejs/vine'

export const updateUserValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    githubHandle: vine.string(),
    email: vine.string().email().normalizeEmail(),
  })
)

export const updateUserWithPasswordValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    githubHandle: vine.string(),
    email: vine.string().email().normalizeEmail(),
    password: vine.string().minLength(8),
  })
)

export const userValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    githubHandle: vine.string(),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('users').select('id').where('email', value)
        return result.length ? false : true
      }),
  })
)

export const registerValidator = vine.compile(
  vine.object({
    firstName: vine.string(),
    lastName: vine.string(),
    githubHandle: vine.string(),
    email: vine
      .string()
      .email()
      .normalizeEmail()
      .unique(async (db, value) => {
        const result = await db.from('users').select('id').where('email', value)
        return result.length ? false : true
      }),
    password: vine.string().minLength(8),
  })
)
