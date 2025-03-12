'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { WORDS } from './words';
import personalInfo from '@/content/personal-info.json';

const wordmasterContent = personalInfo.pages.playground.projects.find((project) => project.title === 'WordMaster')?.content;

const WORD_LENGTH = wordmasterContent?.settings.wordLength ?? 5;
const MAX_ATTEMPTS = wordmasterContent?.settings.maxAttempts ?? 5;

// Add keyframes for cursor animation

type GuessResult = {
  letter: string;
  status: 'correct' | 'present' | 'absent';
}[];

export function Game() {
  const [targetWord, setTargetWord] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  // Initialize game with a random word
  useEffect(() => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    setTargetWord(randomWord);
  }, []);

  // Check guess and update game state
  const submitGuess = useCallback(() => {
    if (currentGuess.length !== WORD_LENGTH) return;
    if (!WORDS.includes(currentGuess.toLowerCase())) {
      toast.error('Not a valid word!');
      return;
    }

    const newGuesses = [...guesses, currentGuess];
    setGuesses(newGuesses);
    setCurrentGuess('');

    if (currentGuess === targetWord) {
      setGameStatus('won');
      toast.success('Congratulations! You won! 🎉');
    } else if (newGuesses.length >= MAX_ATTEMPTS) {
      setGameStatus('lost');
      toast.error(`Game Over! The word was ${targetWord}`);
    }
  }, [currentGuess, guesses, targetWord]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'playing') return;

      if (e.key === 'Enter' && currentGuess.length === WORD_LENGTH) {
        submitGuess();
      } else if (e.key === 'Backspace') {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (currentGuess.length < WORD_LENGTH && /^[A-Za-z]$/.test(e.key)) {
        setCurrentGuess((prev) => (prev + e.key).toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, gameStatus, submitGuess]);

  // Check letter status (correct, present, absent)
  const checkGuess = (guess: string): GuessResult => {
    const result: GuessResult = [];
    const targetLetters = targetWord.split('');

    // First pass: Mark correct letters
    guess.split('').forEach((letter, i) => {
      if (letter === targetLetters[i]) {
        result[i] = { letter, status: 'correct' };
        targetLetters[i] = '#'; // Mark as used
      }
    });

    // Second pass: Mark present/absent letters
    guess.split('').forEach((letter, i) => {
      if (result[i]) return; // Skip already marked correct letters

      const targetIndex = targetLetters.indexOf(letter);
      if (targetIndex !== -1) {
        result[i] = { letter, status: 'present' };
        targetLetters[targetIndex] = '#'; // Mark as used
      } else {
        result[i] = { letter, status: 'absent' };
      }
    });

    return result;
  };

  // Reset game
  const resetGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
    setTargetWord(randomWord);
    setCurrentGuess('');
    setGuesses([]);
    setGameStatus('playing');
  };

  return (
    <div className="mt-12">
      <div className="grid gap-4">
        {Array.from({ length: MAX_ATTEMPTS }).map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-3 justify-center">
            {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
              const guess = guesses[rowIndex] || '';
              const letter = guess[colIndex] || '';
              const isCurrentRow = rowIndex === guesses.length;
              const currentLetter = isCurrentRow ? currentGuess[colIndex] || '' : letter;
              const isActiveLetter = isCurrentRow && colIndex === currentGuess.length;

              let status = 'empty';
              if (guess) {
                status = checkGuess(guess)[colIndex].status;
              }

              return (
                <motion.div
                  key={colIndex}
                  initial={false}
                  animate={{
                    scale: currentLetter ? 1.1 : 1,
                    rotateX: status !== 'empty' ? 360 : 0
                  }}
                  transition={{ duration: 0.2 }}
                  className={`
                    relative w-16 h-16 border-2 flex items-center justify-center text-3xl font-bold rounded-lg
                    ${!currentLetter ? 'border-gray-600 shadow-sm' : 'border-gray-400 shadow-md'}
                    ${status === 'correct' ? 'bg-green-500 border-green-500 text-white shadow-green-500/20 shadow-lg' : ''}
                    ${status === 'present' ? 'bg-yellow-500 border-yellow-500 text-white shadow-yellow-500/20 shadow-lg' : ''}
                    ${status === 'absent' ? 'bg-gray-600 border-gray-600 text-white shadow-gray-600/20 shadow-lg' : ''}
                    ${isActiveLetter ? 'border-primary shadow-primary/20 shadow-lg border-2' : ''}
                    transition-all duration-200
                  `}>
                  {currentLetter}
                  {isActiveLetter && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="absolute bottom-2.5 w-5 h-0.5 bg-primary"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Game Status and Reset Button */}
      {gameStatus !== 'playing' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-12 flex flex-col items-center gap-4">
          <p className="text-xl font-medium">{gameStatus === 'won' ? '🎉 Congratulations!' : `The word was: ${targetWord}`}</p>
          <button onClick={resetGame} className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20 text-lg font-medium">
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
}
