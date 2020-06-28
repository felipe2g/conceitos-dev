/**
 * PAra criar: name, email, password
 */

export default function createUSer(name= '', email: string, password: string) {
  const user = {
    name,
    email,
    password
  }

  return user;

}