//Write a fucntion to transform the beforeObject to match the afterArray while including helperArray.

import Question from './question'
import React, { useEffect, useState } from 'react'
const beforeObject = {
    Mom: 1,
    Dad: 2,
    Child1: 10,
    Child2: 20,
    Dog: 50,
    Cat: 51,
}

const helperArray = [{ id: 1, name: "Super Mom" }]

const afterArray = [
    {
        text: "Super Mom", value: 1
    },
    {
        text: "Dad", value: 2
    },
    {
        text: "Child2", value: 20
    },
    {
        text: "Dog", value: 50
    },
    {
        text: "Cat", value: 51
    },

]

const Practice = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        if (!data) {
            grabData()
            setLoading(true)
        }
    }, [])

    useEffect(() => {
        setLoading(true)
    }, [data])

    const grabData = async () => {
        setTimeout(() => {
            setData({
                FirstName: 'ben',
                LastName: 'bui',
                Hobbies: {
                    sports: ['basketball', 'soccer'],
                    instruments: ['piano', 'flute'],
                    lanugages: ['viet', 'english']
                },
                Id: 23121251,
            })
        }, 5000)
    }

    return (
        <>
            {
                loading ? "We are loading lol" : <Question Data={data} />
            }
        </>
    )
}

export default Practice