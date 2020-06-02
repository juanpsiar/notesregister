import * as mongodb from 'mongodb'
import db from './db'

class BasicQueries {

	
	static async getAllData (name: string) {
		return db.query((c: any) => c.collection(name).find().toArray())
	}

	static async updateOneByQuery (name: string, query: any, data: any) {		
		return db.query((c: any) => c.collection(name).updateOne(query, { $set: data }))
	}

	static convertStringToMongoObjectId (id: string) {
		return new mongodb.ObjectID(id)
	}
}

export default BasicQueries