import {
  integer,
  pgTable,
  text,
  time,
  timestamp,
  uuid,
  varchar
} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text().notNull(),
  age: integer().notNull(),
  email: varchar({ length: 256 }).notNull().unique()
});

export const clinicsTable = pgTable('clinics', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text().notNull(),
  address: text().notNull(),
  phone: varchar({ length: 20 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});

export const doctorsTable = pgTable('doctors', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text().notNull(),
  avatarImageUrl: text('avatar_image_url'),
  specialty: text('specialty').notNull(),
  availableFromWeekday: integer('available_from_weekday').notNull(), // 0 (Sunday) to 6 (Saturday)
  availableToWeekday: integer('available_to_weekday').notNull(), // 0 (Sunday) to 6 (Saturday)
  availableFromTime: time('available_from_hour').notNull(),
  availableToTime: time('available_to_hour').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date())
});
