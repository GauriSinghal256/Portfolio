import { useEffect, useState } from 'react'

const LEETCODE_USERNAME = 'Gauri_098'
const LEETCODE_PROFILE_URL = 'https://leetcode.com/u/Gauri_098/'

export function useLeetCodeProfile() {
  const [solvedQuestions, setSolvedQuestions] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const loadProfile = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://leetcode.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query userProfile($username: String!) {
                matchedUser(username: $username) {
                  submitStats {
                    acSubmissionNum {
                      difficulty
                      count
                    }
                  }
                }
              }
            `,
            variables: { username: LEETCODE_USERNAME },
          }),
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`LeetCode request failed with ${response.status}`)
        }

        const result = await response.json()
        const solved = result?.data?.matchedUser?.submitStats?.acSubmissionNum?.find(
          item => item.difficulty === 'All'
        )?.count ?? null

        setSolvedQuestions(solved)
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError)
        }
      } finally {
        setLoading(false)
      }
    }

    loadProfile()

    return () => controller.abort()
  }, [])

  return {
    loading,
    error,
    profileUrl: LEETCODE_PROFILE_URL,
    solvedQuestions,
  }
}