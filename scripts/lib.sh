#!/usr/bin/env bash

# Shared utility functions for Velovate scripts
# Source this file in other scripts: source "$(dirname "${BASH_SOURCE[0]}")/lib.sh"

set -euo pipefail

# =============================================================================
# DIRECTORY HELPERS
# =============================================================================

# Get the project root directory (where this script's parent is located)
get_project_root() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    echo "$(cd "$script_dir/.." && pwd)"
}

# Change to project root
cd_to_project_root() {
    cd "$(get_project_root)"
}

# =============================================================================
# OUTPUT HELPERS
# =============================================================================

# Colors
readonly COLOR_RED='\033[0;31m'
readonly COLOR_GREEN='\033[0;32m'
readonly COLOR_YELLOW='\033[1;33m'
readonly COLOR_BLUE='\033[0;34m'
readonly COLOR_CYAN='\033[0;36m'
readonly COLOR_RESET='\033[0m'

print_error() {
    echo -e "${COLOR_RED}❌ $1${COLOR_RESET}" >&2
}

print_success() {
    echo -e "${COLOR_GREEN}✓ $1${COLOR_RESET}"
}

print_info() {
    echo -e "${COLOR_BLUE}ℹ $1${COLOR_RESET}"
}

print_warning() {
    echo -e "${COLOR_YELLOW}⚠ $1${COLOR_RESET}"
}

print_step() {
    echo -e "${COLOR_CYAN}▸ $1${COLOR_RESET}"
}

# =============================================================================
# VALIDATION HELPERS
# =============================================================================

# Check if a command exists
command_exists() {
    command -v "$1" &> /dev/null
}

# Require a command to exist
require_command() {
    if ! command_exists "$1"; then
        print_error "Required command not found: $1"
        exit 1
    fi
}

# =============================================================================
# GIT HELPERS
# =============================================================================

# Check if we're in a git repository
is_git_repo() {
    git rev-parse --git-dir > /dev/null 2>&1
}

# Get current git branch name
get_git_branch() {
    git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown"
}

# Get current git commit hash (short)
get_git_commit() {
    git rev-parse --short HEAD 2>/dev/null || echo "unknown"
}

# Get git commit count
get_git_commit_count() {
    git rev-list --count HEAD 2>/dev/null || echo "0"
}

# =============================================================================
# ENVIRONMENT HELPERS
# =============================================================================

# Check if running on macOS
is_macos() {
    [[ "$OSTYPE" == "darwin"* ]]
}

# Check if running on Linux
is_linux() {
    [[ "$OSTYPE" == "linux-gnu"* ]]
}

# =============================================================================
# VERSION HELPERS
# =============================================================================

# Get version information (calls get-version-info.sh)
get_version_info() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    bash "$script_dir/get-version-info.sh"
}

# Get semantic version only (e.g., "1.0.0")
get_version() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    bash "$script_dir/get-version-info.sh" --version
}

# Get build number only (e.g., "847")
get_build_number() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    bash "$script_dir/get-version-info.sh" --build
}

# Get commit SHA only (e.g., "5cfd7e5")
get_commit_sha() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    bash "$script_dir/get-version-info.sh" --commit
}

# Get full version string (e.g., "1.0.0+847")
get_full_version() {
    local script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    bash "$script_dir/get-version-info.sh" --full
}

# =============================================================================
# ERROR HANDLING
# =============================================================================

# Exit with error message
die() {
    print_error "$1"
    exit "${2:-1}"
}
