
interface Person {
    age: number
    firstName: string
    lastName: string
    address: Address
}

interface Address {
    city: string
    state: string
    street?: string
}

export const ObjectLiterals = () => {
    const person: Person = {
        age: 23,
        firstName: 'Nestor',
        lastName: 'Calderon',
        address: {
            city: 'Guatemala',
            state: 'GTM',
        },
    }

    return (
        <>
            <h3>Object Literals</h3>
            <code>
                <pre>{JSON.stringify(person, null, 2)}</pre>
            </code>
        </>
    )
}
