const nextJest = require('next/jest')

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },

}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config)