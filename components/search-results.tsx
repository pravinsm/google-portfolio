"use client"

import { useState } from "react"
import { ExternalLink, Calendar, MapPin, Code, Award, User, BookOpen, Phone } from "lucide-react"
import type { PortfolioItem } from "@/lib/portfolio-data"

interface SearchResultsProps {
  results: PortfolioItem[]
  query: string
  isDarkMode: boolean
}

export function SearchResults({ results, query, isDarkMode }: SearchResultsProps) {
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set())

  const toggleTagExpansion = (itemId: string) => {
    const newExpanded = new Set(expandedTags)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedTags(newExpanded)
  }

  const getCategoryColor = (category: string) => {
    const lightColors = {
      projects: "text-blue-600",
      experience: "text-green-600",
      skills: "text-purple-600",
      education: "text-orange-600",
      publications: "text-red-600",
      contact: "text-gray-600",
      about: "text-indigo-600",
    }
    const darkColors = {
      projects: "text-blue-400",
      experience: "text-green-400",
      skills: "text-purple-400",
      education: "text-orange-400",
      publications: "text-red-400",
      contact: "text-gray-400",
      about: "text-indigo-400",
    }
    const colors = isDarkMode ? darkColors : lightColors
    return colors[category as keyof typeof colors] || (isDarkMode ? "text-gray-400" : "text-gray-600")
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      projects: <Code className="w-4 h-4" />,
      experience: <Award className="w-4 h-4" />,
      skills: <User className="w-4 h-4" />,
      education: <BookOpen className="w-4 h-4" />,
      publications: <ExternalLink className="w-4 h-4" />,
      contact: <Phone className="w-4 h-4" />,
      about: <User className="w-4 h-4" />,
    }
    return icons[category as keyof typeof icons] || <Code className="w-4 h-4" />
  }

  const highlightText = (text: string, query: string) => {
    return text // Simply return text without highlighting
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className={`text-sm mb-6 animate-fade-in ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        About {results.length.toLocaleString()} results ({(Math.random() * 0.5 + 0.1).toFixed(2)} seconds)
      </div>

      <div className="space-y-8">
        {results.map((result, index) => {
          const isExpanded = expandedTags.has(result.id)
          const visibleTags = isExpanded ? result.tags : result.tags.slice(0, 6)
          const hasMoreTags = result.tags.length > 6

          return (
            <div
              key={result.id}
              className={`max-w-2xl animate-slide-up p-4 rounded-lg transition-all duration-200 -ml-4 ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-50"}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <span className={getCategoryColor(result.category)}>{getCategoryIcon(result.category)}</span>
                <span className={`text-sm capitalize font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {result.category}
                </span>
                {result.date && (
                  <>
                    <span className={isDarkMode ? "text-gray-600" : "text-gray-400"}>•</span>
                    <div
                      className={`flex items-center space-x-1 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      <Calendar className="w-3 h-3" />
                      <span>{result.date}</span>
                    </div>
                  </>
                )}
                {result.location && (
                  <>
                    <span className={isDarkMode ? "text-gray-600" : "text-gray-400"}>•</span>
                    <div
                      className={`flex items-center space-x-1 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>{result.location}</span>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-1">
                  <h3
                    className={`text-xl mb-1 cursor-pointer transition-colors duration-200 ${isDarkMode ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"} hover:underline`}
                  >
                    {result.url ? (
                      <a
                        href={result.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1"
                      >
                        <span>{highlightText(result.title, query)}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      highlightText(result.title, query)
                    )}
                  </h3>

                  {result.url && (
                    <div
                      className={`text-sm mb-2 hover:underline cursor-pointer ${isDarkMode ? "text-green-400" : "text-green-700"}`}
                    >
                      {result.url}
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed mb-3 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {highlightText(result.content, query)}
                  </p>

                  {result.company && (
                    <div className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      <strong className={isDarkMode ? "text-gray-200" : "text-gray-800"}>{result.category === "education" ? "University:" : "Company:"}</strong>{" "}
                      {result.company}
                    </div>
                  )}

                  {result.description && (
                    <div className={`text-sm mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {result.description}
                    </div>
                  )}

                  {result.technologies && result.technologies.length > 0 && (
                    <div className="mb-3">
                      <div className={`text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {result.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs rounded-full border transition-colors duration-200 cursor-pointer ${
                              isDarkMode
                                ? "bg-blue-900 text-blue-300 border-blue-700 hover:bg-blue-800"
                                : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {result.achievements && result.achievements.length > 0 && (
                    <div className="mb-3">
                      <div className={`text-sm font-medium mb-2 ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
                        Key Achievements:
                      </div>
                      <ul className={`text-sm space-y-1 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                        {result.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1 font-bold">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mt-3">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs cursor-pointer transition-colors duration-200 ${
                          isDarkMode
                            ? "text-blue-400 hover:text-blue-300 hover:underline"
                            : "text-blue-600 hover:text-blue-800 hover:underline"
                        }`}
                      >
                        #{tag}
                      </span>
                    ))}
                    {hasMoreTags && (
                      <button
                        onClick={() => toggleTagExpansion(result.id)}
                        className={`text-xs cursor-pointer transition-colors duration-200 hover:underline ${
                          isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        {isExpanded ? "Show less" : `+${result.tags.length - 6} more`}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {results.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="mb-6">
              <div className="text-6xl text-gray-300 mb-4">🔍</div>
              <p className={`mb-4 text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                Your search - <strong className={isDarkMode ? "text-gray-200" : "text-gray-800"}>{query}</strong> - did
                not match any portfolio items.
              </p>
            </div>
            <div
              className={`text-sm p-6 rounded-lg max-w-md mx-auto ${isDarkMode ? "text-gray-400 bg-gray-800" : "text-gray-500 bg-gray-50"}`}
            >
              <p className={`font-medium mb-3 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>Suggestions:</p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Make sure all words are spelled correctly</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Try different keywords</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>Try more general keywords</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    Try: <em>about, projects, experience, skills, education</em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
