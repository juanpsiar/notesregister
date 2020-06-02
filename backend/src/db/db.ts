import * as mongodb from 'mongodb'
import * as dotenv from 'dotenv'

dotenv.config()

class Db {
	private static client: mongodb.MongoClient

	static async connect () {
		const connection = this.client ? this.client :
			await mongodb.MongoClient.connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
		return connection
	}

	static async query (func: any) {
		this.client = await this.connect()
		return Promise.resolve(this.client)
			.then(db => db.db(process.env.DB_NAME))
			.then(func)
			.catch(err => { throw new MongoError(err) })
	}
}

class MongoError extends Error {
	type: string
	error: any
	code: any
	index: any
	constructor (error) {
		super(error)
		this.type = 'mongo'
		this.code = error.code
		this.index = error.index
		Object.setPrototypeOf(this, new.target.prototype)
	}
}

export default Db