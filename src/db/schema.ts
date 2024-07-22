import {pgTable, text} from "drizzle-orm/pg-core"


//pgTable (table name, {column name: column type})
export const testing = pgTable("testing",{
    id: text("id").notNull().primaryKey(),
    name: text("name")
})