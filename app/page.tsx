"use client";

import type React from "react";

import { useState } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { portfolioData } from "@/lib/portfolio-data";
import { SearchResults } from "@/components/search-results";

export default function GooglePortfolio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setShowResults(false);
      return;
    }

    setIsLoading(true);
    setShowSuggestions(false);

    await new Promise((resolve) => setTimeout(resolve, 300));

    const queryLower = query.toLowerCase();

    const categoryMatches = portfolioData.filter(
      (item) => item.category.toLowerCase() === queryLower
    );

    if (categoryMatches.length > 0) {
      setSearchResults(categoryMatches);
    } else {
      const results = portfolioData.filter(
        (item) =>
          item.title.toLowerCase().includes(queryLower) ||
          item.content.toLowerCase().includes(queryLower) ||
          item.category.toLowerCase().includes(queryLower) ||
          item.tags.some((tag) => tag.toLowerCase().includes(queryLower))
      );
      setSearchResults(results);
    }

    setShowResults(true);
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(searchQuery);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const getSearchSuggestions = (query: string) => {
    if (!query.trim()) return [];

    const allSuggestions = [
      "projects",
      "experience",
      "skills",
      "education",
      "contact",
      "about",
      "publications",
      "React",
      "JavaScript",
      "Python",
      "Full Stack",
      "AI",
      "Next.js",
      "SaleAssist.ai",
      "Welth",
      "Resume Builder",
      "LLM Resume Reviewer",
      "Medvault",
      "HR-RPA",
      "Colorado State University",
      "Senior Software Engineer",
    ];

    return allSuggestions
      .filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(query.toLowerCase()) &&
          suggestion.toLowerCase() !== query.toLowerCase()
      )
      .slice(0, 8);
  };

  const keywordInfo = [
    "4+ Years Experience",
    "Full Stack Developer",
    "AI Enthusiast",
    "React Expert",
    "Problem Solver",
    "Colorado State Graduate",
  ];

  const handleLogoClick = () => {
    setShowResults(false);
    setSearchQuery("");
    setSearchResults([]);
    setShowSuggestions(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="sm"
          className={`p-2 rounded-full ${
            isDarkMode
              ? "text-gray-300 hover:bg-gray-800"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>

      {!showResults ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in">
          <div className="mb-8 animate-bounce-in text-center">
            <h1
              className="text-6xl md:text-8xl font-semibold mb-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <span
                className={`text-blue-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-blue-400" : ""
                }`}
              >
                P
              </span>
              <span
                className={`text-red-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-red-400" : ""
                }`}
              >
                r
              </span>
              <span
                className={`text-amber-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-amber-400" : ""
                }`}
              >
                a
              </span>
              <span
                className={`text-blue-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-blue-400" : ""
                }`}
              >
                v
              </span>
              <span
                className={`text-green-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-green-400" : ""
                }`}
              >
                i
              </span>
              <span
                className={`text-red-600 hover:scale-110 transition-transform duration-200 inline-block ${
                  isDarkMode ? "text-red-400" : ""
                }`}
              >
                n
              </span>
            </h1>
            <p
              className={`text-center text-base md:text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } mt-2`}
            >
              Senior Software Engineer & Full Stack Developer
            </p>
            <p
              className={`text-center text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } mt-1`}
            >
              Building real-time, AI-powered solutions
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl mb-8 animate-slide-up"
          >
            <div className="relative group">
              <div
                className={`flex items-center border rounded-full px-4 py-2 hover:shadow-lg focus-within:shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-600 bg-gray-800"
                    : "border-gray-300 bg-white"
                }`}
              >
                <Search
                  className={`w-5 h-5 mr-3 transition-colors duration-200 group-focus-within:text-blue-500 ${
                    isDarkMode ? "text-gray-400" : "text-gray-400"
                  }`}
                />
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 200)
                  }
                  placeholder="Search Pravin's profile..."
                  className={`flex-1 border-none outline-none bg-transparent text-base focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ${
                    isDarkMode
                      ? "text-white placeholder:text-gray-400"
                      : "text-black placeholder:text-gray-500"
                  }`}
                />
              </div>

              {showSuggestions && (
                <div
                  className={`absolute top-full left-0 right-0 border rounded-lg shadow-lg mt-1 z-50 ${
                    isDarkMode
                      ? "bg-gray-800 border-gray-600"
                      : "bg-white border-gray-200"
                  }`}
                >
                  {getSearchSuggestions(searchQuery).map(
                    (suggestion, index) => (
                      <div
                        key={suggestion}
                        className={`px-4 py-2 cursor-pointer text-sm flex items-center ${
                          isDarkMode
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <Search
                          className={`w-4 h-4 mr-3 ${
                            isDarkMode ? "text-gray-400" : "text-gray-400"
                          }`}
                        />
                        {suggestion}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-6">
              {keywordInfo.map((info, index) => (
                <span
                  key={info}
                  className={`px-3 py-1 text-xs rounded-full ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300 border border-gray-700"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  {info}
                </span>
              ))}
            </div>
          </form>

          <div className="text-center animate-fade-in-delayed">
            <p
              className={`text-sm mb-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Quick searches:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "about",
                "projects",
                "experience",
                "skills",
                "education",
                "publications",
                "contact",
              ].map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`px-3 py-1 text-sm hover:underline transition-colors duration-200 animate-fade-in ${
                    isDarkMode
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div
            className={`border-b px-4 py-3 sticky top-0 z-10 shadow-sm ${
              isDarkMode
                ? "border-gray-700 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="max-w-6xl mx-auto flex items-center">
              <h1
                className={`text-2xl font-semibold mr-8 cursor-pointer hover:opacity-80 transition-opacity duration-200 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
                onClick={handleLogoClick}
              >
                <span
                  className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                >
                  P
                </span>
                <span className={isDarkMode ? "text-red-400" : "text-red-600"}>
                  r
                </span>
                <span
                  className={isDarkMode ? "text-amber-400" : "text-amber-600"}
                >
                  a
                </span>
                <span
                  className={isDarkMode ? "text-blue-400" : "text-blue-600"}
                >
                  v
                </span>
                <span
                  className={isDarkMode ? "text-green-400" : "text-green-600"}
                >
                  i
                </span>
                <span className={isDarkMode ? "text-red-400" : "text-red-600"}>
                  n
                </span>
              </h1>

              <form onSubmit={handleSubmit} className="flex-1 max-w-xl">
                <div className="relative">
                  <div
                    className={`flex items-center border rounded-full px-4 py-2 hover:shadow-md focus-within:shadow-md transition-all duration-200 ${
                      isDarkMode
                        ? "border-gray-600 bg-gray-800"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <Search
                      className={`w-4 h-4 mr-3 ${
                        isDarkMode ? "text-gray-400" : "text-gray-400"
                      }`}
                    />
                    <Input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`flex-1 border-none outline-none bg-transparent text-sm focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                    />
                  </div>
                </div>
              </form>

              <Button
                onClick={handleLogoClick}
                variant="ghost"
                className={`ml-4 text-sm transition-all duration-200 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"
                }`}
              >
                Back to Home
              </Button>
            </div>
          </div>

          <SearchResults
            results={searchResults}
            query={searchQuery}
            isDarkMode={isDarkMode}
          />
        </div>
      )}
    </div>
  );
}
