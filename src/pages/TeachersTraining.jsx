import { useEffect } from 'react';
import TeachersTrainingSection from '../components/TeachersTrainingSection';

export default function TeachersTraining() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--paper)', minHeight: '80vh', overflowX: 'hidden' }}>
      <TeachersTrainingSection />
    </main>
  );
}
