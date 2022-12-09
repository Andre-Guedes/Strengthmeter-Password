import "./strengthmeter.css"

const Strengthmeter = ({ password }) => {
    const tests = [
        (password) => password.length > 6,
        (password) => password.length >= 10,
        (password) => /[A-Z]/.test(password),
        (password) => /[a-z]/.test(password),
        (password) => /[0-9]/.test(password),
        (password) => /\s+/g.test(password),
        (password) => /\W|_/.test(password)
    ]

    const passwordStrong = tests.reduce((total, test) => {
        return test(password) ? total + 1 : total
    }, 0)

    const className = passwordStrong < 3 ? "weak" : passwordStrong >= 5 ? "strong" : "medium" 

    return (
        <div className={`${!!password.length ? className : ""} strength`.trim()} />
    )
}

export default Strengthmeter;
