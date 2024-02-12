import { lazy, Suspense } from 'react';

// Lazy load the components
const StayUpdated = lazy(() => import('@/components/stayupdated/page'));
const Main = lazy(() => import('@/components/carousel/main'));
const Service = lazy(() => import('@/components/services/page'));
const SecureFile = lazy(() => import('@/components/homecomponents/sft/page'));
const RecordAnalysis = lazy(() => import('@/components/homecomponents/mra/page'));
const Diff = lazy(() => import('@/components/homecomponents/wmud/page'));
const CarouselComponent = lazy(() => import('@/components/homecomponents/carousel/page'));


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarouselComponent/>
      <Diff />
      <RecordAnalysis />
      <SecureFile />
      <Service />
      <Main />
      <StayUpdated />
    </Suspense>
  );
}
