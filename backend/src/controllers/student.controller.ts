import BasicQueries from '../db/BasicQueries'

class Student {

  private static collectionName: string = 'notes'

  static async getStudents () {
		return BasicQueries.getAllData(this.collectionName)
  }
  
  static async updateNoteById (id: string, data: any) {
		return BasicQueries.updateOneByQuery(this.collectionName,
			 { _id: BasicQueries.convertStringToMongoObjectId(id) }, data)
			 .then((result: any) => result.result)
	}
}


export default Student;