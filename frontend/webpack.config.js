module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        fallback: { stream: require.resolve("path-browserify") },
        },
}