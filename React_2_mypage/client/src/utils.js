import React from "react"

export const breakLines = originalString => {
  const breakStrings = originalString.split("\n")
  return breakStrings.map((val, idx) => <div key={idx}>{val}</div>)
}
