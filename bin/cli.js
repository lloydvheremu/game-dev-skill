#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const force = args.includes('--force');
const help = args.includes('--help');

// Determine destination
const skillName = '@lloydvheremu/game-development-lifecycle';
const destDir = path.join(process.cwd(), '.claude', 'skills', skillName.replace('@', '').replace('/', '-'));

function printHelp() {
  console.log('Usage: npx @lloydvheremu/game-development-lifecycle [--force] [--help]');
  console.log('');
  console.log('Installs the game-development-lifecycle skill into .claude/skills/');
  console.log('');
  console.log('Options:');
  console.log('  --force   Overwrite existing destination if it already exists');
  console.log('  --help    Show this usage message and exit');
}

if (help) {
  printHelp();
  process.exit(0);
}

// Check if destination already exists
let alreadyExists = false;
try {
  alreadyExists = fs.existsSync(destDir);
} catch (e) {
  // destDir doesn't exist yet - that's fine
}

// If destination exists and --force is not set, print message and exit
if (alreadyExists && !force) {
  console.log(`Destination already exists: ${destDir}`);
  console.log('Use --force to overwrite.');
  process.exit(0);
}

// Copy SKILL.md to destination
const skillMdSource = path.join(__dirname, '..', 'SKILL.md');
const skillMdDest = path.join(destDir, 'SKILL.md');

try {
  // Create destination folder if missing
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  // Copy SKILL.md
  if (fs.existsSync(skillMdSource)) {
    fs.copyFileSync(skillMdSource, skillMdDest);
    console.log('Copied SKILL.md to:', skillMdDest);
  } else {
    console.error('ERROR: SKILL.md not found in source directory');
    process.exit(1);
  }
} catch (e) {
  console.error('ERROR copying SKILL.md:', e.message);
  process.exit(1);
}

// Copy references/ folder recursively
const referencesSource = path.join(__dirname, '..', 'references');
const referencesDest = path.join(destDir, 'references');

try {
  if (fs.existsSync(referencesSource)) {
    // Copy directory recursively
    function copyDirRecursive(src, dest) {
      // Create dest folder if missing
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }

      const entries = fs.readdirSync(src, { withFileTypes: true });

      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
          copyDirRecursive(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    copyDirRecursive(referencesSource, referencesDest);
    console.log('Copied references/ to:', referencesDest);
  } else {
    console.log('references/ folder not found - skipping');
  }
} catch (e) {
  console.error('ERROR copying references/:', e.message);
  process.exit(1);
}

console.log(`Installed ${skillName} to: ${destDir}`);
process.exit(0);