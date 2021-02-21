import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoriesMeals: {
        screen: CategoryMealScreen
    },
    MealDetail: {
        screen: MealDetailsScreen
    }
})

export default createAppContainer(MealsNavigator)
