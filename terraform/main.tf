terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vercel_deploy" {
  name      = "rocket-project"
  git_repository = {
    type = "github"
    repo = "marinadiniz-plank/RocketProject"
  }
}