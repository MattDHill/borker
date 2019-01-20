import { GET, Path, PathParam, QueryParam } from 'typescript-rest'
import { TransactionHandler } from './transaction'
import { getRepository } from 'typeorm'
import { User } from '../../db/entities/user'
import { TransactionType } from '../../db/entities/transaction'

@Path('/users')
export class UserHandler {
	constructor (
    public transactionHander = new TransactionHandler(),
  ) { }

	@Path('/')
	@GET
	async index (
    @QueryParam('page') page: number = 1,
    @QueryParam('per_page') perPage: number = 20,
  ) {
    return getRepository(User).find({
      take: perPage,
      skip: perPage * (page - 1),
    })
	}

	@Path('/:address')
	@GET
	async get (@PathParam('address') address: string) {
    return getRepository(User).findOne(address)
  }
  
	@Path('/:address/transactions')
	@GET
	async indexTransactions (
    @PathParam('address') address: string,
    @QueryParam('types') types?: TransactionType[],
    @QueryParam('page') page: number = 1,
    @QueryParam('per_page') perPage: number = 20,
  ) {
		return this.transactionHander.index(address, types, page, perPage)
	}
}