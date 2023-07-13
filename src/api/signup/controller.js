import Signup from './model.js'
import { success, error } from '../../services/response/index.js'

export const create = ({ bodymen: { body } }, res, next) => {
Signup.create({
    ...body
  })
  .then((signup) => signup.view(true))
  .then(success(res, 201))
  .catch(next)
}


export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Signup.count(query)
    .then((count) =>
    Signup.find(query, select, cursor).then((bank) => ({
        count,
        rows: bank.map((banks) => banks.view())
      }))
    )
    .then(success(res))
    .catch(next)

    export const update = ({bodymen: {body}, params}, res, next) =>
    Signup.findByIdAndUpdate(params.id, {
      ...body
    })
    .then(error(res))
    .then((signup) => signup.view(true))
    .then(success(res))
    .catch(next)
    