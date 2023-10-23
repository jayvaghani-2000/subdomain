export const hasSubdomain = () => {
    const domain = window.location.hostname
    const regex = /^([^.]*)\./;

    const match = domain.match(regex)
    if (match && domain.split(".").length === (process.env.NODE_ENV === "production" ? 3 : 2)) {
        const extractedString = match[1];
        if (extractedString !== "www") return true
    }

    return false
}