import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { HomeScreen } from "@/screens/HomeScreen";
import { ShopScreen } from "@/screens/ShopScreen";
import { CategoriesScreen } from "@/screens/CategoriesScreen";
import { WineDetailScreen } from "@/screens/WineDetailScreen";
import { MyWinesScreen } from "@/screens/MyWinesScreen";
import { ProfileScreen } from "@/screens/ProfileScreen";
import { ScannerScreen } from "@/screens/ScannerScreen";
import { FoodWineScreen } from "@/screens/FoodWineScreen";
import { WineCategory } from "@/data/wines";

type Screen = 
  | { type: 'home' }
  | { type: 'shop' }
  | { type: 'categories' }
  | { type: 'wine-detail'; wineId: string }
  | { type: 'my-wines' }
  | { type: 'more' }
  | { type: 'scanner' }
  | { type: 'food-wine' };

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [screen, setScreen] = useState<Screen>({ type: 'home' });
  const [showScanner, setShowScanner] = useState(false);

  const handleTabChange = (tab: string) => {
    if (tab === 'scan') {
      setShowScanner(true);
      return;
    }
    
    setActiveTab(tab);
    
    switch (tab) {
      case 'home':
        setScreen({ type: 'home' });
        break;
      case 'shop':
        setScreen({ type: 'shop' });
        break;
      case 'my-wines':
        setScreen({ type: 'my-wines' });
        break;
      case 'more':
        setScreen({ type: 'more' });
        break;
    }
  };

  const handleWineClick = (wineId: string) => {
    setScreen({ type: 'wine-detail', wineId });
  };

  const handleBack = () => {
    switch (screen.type) {
      case 'wine-detail':
      case 'categories':
        setScreen({ type: 'shop' });
        setActiveTab('shop');
        break;
      case 'food-wine':
        setScreen({ type: 'more' });
        setActiveTab('more');
        break;
      default:
        setScreen({ type: 'home' });
        setActiveTab('home');
    }
  };

  const handleCategorySelect = (category: WineCategory) => {
    // For now, just go back to shop - could filter by category
    setScreen({ type: 'shop' });
    setActiveTab('shop');
  };

  const renderScreen = () => {
    switch (screen.type) {
      case 'home':
        return <HomeScreen onWineClick={handleWineClick} />;
      case 'shop':
        return (
          <ShopScreen
            onWineClick={handleWineClick}
            onCategoriesClick={() => setScreen({ type: 'categories' })}
          />
        );
      case 'categories':
        return (
          <CategoriesScreen
            onBack={handleBack}
            onCategorySelect={handleCategorySelect}
          />
        );
      case 'wine-detail':
        return (
          <WineDetailScreen
            wineId={screen.wineId}
            onBack={handleBack}
          />
        );
      case 'my-wines':
        return <MyWinesScreen />;
      case 'more':
        return (
          <ProfileScreen
            onFoodWineClick={() => setScreen({ type: 'food-wine' })}
          />
        );
      case 'food-wine':
        return <FoodWineScreen onBack={handleBack} />;
      default:
        return <HomeScreen onWineClick={handleWineClick} />;
    }
  };

  return (
    <>
      <AppLayout activeTab={activeTab} onTabChange={handleTabChange}>
        {renderScreen()}
      </AppLayout>

      <AnimatePresence>
        {showScanner && (
          <ScannerScreen onClose={() => setShowScanner(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
