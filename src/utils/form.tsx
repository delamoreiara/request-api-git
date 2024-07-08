import { FormEvent } from "react";

interface FormProps {
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    setName: (name: string) => void;
}

export function Form({ handleSubmit, setName }: FormProps) {
    
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="GitHub User"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }