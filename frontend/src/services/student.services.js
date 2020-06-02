import { client } from './api'

class StudentServices {
  
  static async getStudent () {
    const result = await client.get('/student');
    console.log('result frontend', result);
    return result
  }

  static async updatePerson(id, person) {
    const result = await client.put(`/people/ids/${id}`, person)
    return result
  }

  static async deletePerson (id) {
    const result = await client.delete(`people/ids/${id}`)
    return result
  }
}

export default StudentServices
