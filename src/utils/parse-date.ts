const parseDate = (date: number) => {
    const dateClass = new Date(date)
    return `${dateClass.getDate()}/${dateClass.getMonth()}/${dateClass.getFullYear()}`

}

export default parseDate