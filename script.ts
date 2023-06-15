import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // const user = await prisma.user.create({data: {name: "Mayank", email: "mayank@gmail.com"}})
    // const users = await prisma.user.findMany()
    // await prisma.user.deleteMany()
    // const user = await prisma.user.create({data: {name: "Meghan", email: "meghan@gmail.com", age: 25, isAdmin: false, role: "Basic"}})

    // Create many users or post many
    // const user = await prisma.user.createMany({
    //     data: 
    //     [{name: "tes1", email: "test1@gmail.com", age: 40,  isAdmin: false},
    //     {name: "test2", email: "test2@gmail.com", age: 30,  isAdmin: true}
    //     ]
    // })
    // console.log(user);

    // Read the data
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "roh@gmail.com"
    //     },
    //     include:{
    //         userPrefernce: true
    //     }
    // })

    // const user = await prisma.user.findMany({
    //     where: {
    //         email: {endsWith: "com"}
    //     }
    // })

    // update a user
    // const user = await prisma.user.update({
    //     where:{
    //         email: "test1@gmail.com"
    //     },
    //     data: {
    //         email: "bhupinder@gmail.com",
    //         name: "Bhupinder"
    //     }
    // })

    // const user = await prisma.user.update({
    //     where:{
    //         email: "rohit@gmail.com"
    //     },
    //     data: {
    //         email: "roheet@gmail.com",
    //         name: "roheet",
    //         userPrefernce: {
    //             create: {
    //                 emailUpdates: true
    //             }
    //         }
    //     },
    //     include: {
    //         userPrefernce: true
    //     }
    // })
    // console.log(user)

    // Delete a user
    // const user = await prisma.user.delete({
    //     where:{
    //         email: "roh@gmail.com"
    //     }
    // })

    // Delete all users
    // const user = await prisma.user.deleteMany()

    // console.log(user);
}

// call main and handle error using catch and finally

main().catch(e => {
    console.error(e.message)
}).finally(async () => {
    await prisma.$disconnect();
})