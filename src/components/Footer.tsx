import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="container-responsive text-sm text-gray-600 dark:text-gray-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:underline" href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:underline" href={personal.links.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  )
}


