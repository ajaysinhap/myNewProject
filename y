rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, create: if true; // Allow read and creation without authentication
      allow update, delete: if request.auth != null; // Require authentication for update and delete operations
    }
  }
}
