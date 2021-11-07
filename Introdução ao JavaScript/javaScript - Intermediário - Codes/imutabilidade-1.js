//Se precisar de um novo, tem que criar um baseado no que queremos remover, não se pode atualizar

const user = {
    name: 'Guilherme',
    lastName: 'Cabrini da Silva'

};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}
const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);