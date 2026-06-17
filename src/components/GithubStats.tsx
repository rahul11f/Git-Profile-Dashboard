import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Star, GitFork, Users } from 'lucide-react';
import { profileData } from '../data/profile';

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  language: string;
}

export default function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${profileData.githubUsername}`);
        const userData = await userRes.json();
        setUser(userData);

        const reposRes = await fetch(`https://api.github.com/users/${profileData.githubUsername}/repos?sort=updated&per_page=6`);
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (profileData.githubUsername) {
      fetchGithubData();
    }
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  return (
    <section id="github" className="py-20 relative z-10 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Live GitHub Stats</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full opacity-50 shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        {user && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <div className="glass-panel px-8 py-6 rounded-xl flex flex-col items-center gap-2">
              <BookOpen className="text-cyan-400 w-8 h-8 mb-2" />
              <span className="text-3xl font-bold">{user.public_repos}</span>
              <span className="text-sm text-gray-400">Repositories</span>
            </div>
            <div className="glass-panel px-8 py-6 rounded-xl flex flex-col items-center gap-2">
              <Users className="text-purple-400 w-8 h-8 mb-2" />
              <span className="text-3xl font-bold">{user.followers}</span>
              <span className="text-sm text-gray-400">Followers</span>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-6 rounded-xl block group hover:border-cyan-500/50 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-300 transition-colors line-clamp-1">{repo.name}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{repo.description || "No description available."}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-300">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-gray-400" /> {repo.forks_count}
                  </span>
                </div>
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                    {repo.language}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
