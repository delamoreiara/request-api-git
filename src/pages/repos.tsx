import { useState, useEffect } from "react"
import axios from "axios"


interface DataRepoUser{
  name:string, 
  description:string,
  created_at:string,
  html_url: string,
}

interface DataRepository {
  repositories: DataRepoUser[],
}

interface DataRepoUserProps {
  name: string;
}


export function ListRepo({name}: DataRepoUserProps){

const url = "https://api.github.com/users";
const [repoData, setRepoData] = useState<DataRepository|null>(null);


useEffect(() => {
  const getRepo = async () => {
    try {
      const response = await axios.get(`${url}/${name}`);
      const repoResponse = await axios.get<DataRepoUser[]>(response.data.repos_url);
      const userRepo: DataRepository = {
        repositories: repoResponse.data.map((repo) => ({
          name: repo.name,
          description: repo.description,
          created_at: repo.created_at,
          html_url: repo.html_url,
        })),
      };
      setRepoData(userRepo);
    } catch (error) {
      console.error(error);
    }
  };

if (name) {
  getRepo();
}
}, [name]);

return(
  <div id="repoStyle">
  {repoData?.repositories.map((repo, index) => (
    <li key={index}>
      <div>Name: {repo.name}</div>
      <div>Description: {repo.description}</div>
      <div>Created at: {repo.created_at}</div>
      <br />
      <a href={repo.html_url}>Visit Repository</a>
    </li>
  ))}
</div>
)
}



