# Automated Vercel Deployment Script
Write-Host "🚀 Starting automated deployment to Vercel..." -ForegroundColor Cyan

# Step 1: Navigate to project
Set-Location "D:\Projects\Nowy folder"
Write-Host "✅ Project folder: $PWD" -ForegroundColor Green

# Step 2: Verify GitHub remote
$remote = git remote get-url origin
Write-Host "✅ GitHub remote: $remote" -ForegroundColor Green

# Step 3: Build frontend
Write-Host "🔨 Building frontend..." -ForegroundColor Yellow
Set-Location "frontend"
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

# Step 4: Return to root
Set-Location ".."

# Step 5: Deploy to Vercel
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Cyan
Write-Host "⚠️  Please authorize in the browser when prompted" -ForegroundColor Yellow

# Try to deploy
vercel --prod --yes

Write-Host "✅ Deployment process completed!" -ForegroundColor Green

