
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { processCommand, CommandResponse } from '../utils/terminalCommands';

interface TerminalEntry {
  input?: string;
  output?: CommandResponse;
  isCommand: boolean;
}

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<TerminalEntry[]>([
    { 
      output: { 
        text: 'مرحبًا بك في طرفية تيكنولوجي تيم! اكتب "help" لمعرفة الأوامر المتاحة.',
      }, 
      isCommand: false 
    }
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to bottom when history changes
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);
  
  const focusInput = () => {
    inputRef.current?.focus();
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const command = input.trim();
    if (!command) return;
    
    // Add command to history
    setHistory(prev => [...prev, { input: command, isCommand: true }]);
    
    // Process command
    const response = processCommand(command);
    
    // Handle special clear command
    if (response.text === '[[CLEAR]]') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { output: response, isCommand: false }]);
    }
    
    // Update command history for up/down navigation
    if (command && !commandHistory.includes(command)) {
      setCommandHistory(prev => [command, ...prev]);
    }
    
    // Reset input and history index
    setInput('');
    setHistoryIndex(-1);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle up/down arrows for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      if (newIndex >= 0 && commandHistory[newIndex]) {
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      if (newIndex >= 0) {
        setInput(commandHistory[newIndex]);
      } else {
        setInput('');
      }
    }
  };
  
  const renderOutput = (output: CommandResponse) => {
    if (output.isHtml) {
      return <div dangerouslySetInnerHTML={{ __html: output.text }} />;
    }
    
    return output.text.split('\n').map((line, i) => (
      <div key={i} className={output.isError ? 'text-terminal-error' : ''}>
        {line || <br />}
      </div>
    ));
  };
  
  return (
    <div className="terminal-window w-full h-[400px] md:h-[450px] lg:h-[500px]" onClick={focusInput}>
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500" />
        <div className="terminal-circle bg-yellow-500" />
        <div className="terminal-circle bg-green-500" />
        <div className="ml-4 text-sm opacity-80 flex items-center">
          <TerminalIcon className="w-4 h-4 mr-2" />
          terminal@techteam
        </div>
      </div>
      
      <div ref={terminalBodyRef} className="terminal-body h-[calc(100%-40px)] overflow-y-auto">
        {history.map((entry, index) => (
          <div key={index} className="mb-2">
            {entry.isCommand && (
              <div className="flex">
                <span className="prompt">$ </span>
                <span className="ml-2">{entry.input}</span>
              </div>
            )}
            
            {entry.output && (
              <div className="ml-0 mt-1">
                {renderOutput(entry.output)}
              </div>
            )}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex mt-2">
          <span className="prompt">$ </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-2 bg-transparent w-full outline-none"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
