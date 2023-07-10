import { Category } from '@application/entities/category.entity';

export abstract class CategoryRepository {
  abstract create(user_uuid: string, category: Category): Promise<void>;
  abstract update(category: Category): Promise<void>;
  abstract findCategoryById(category_uuid: string): Promise<Category | null>;
  abstract getAllCategories(user_uuid: string): Promise<Category[]>;
}
